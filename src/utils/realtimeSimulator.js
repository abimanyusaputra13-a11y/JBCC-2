// Realtime Looping Simulation Engine for Lintas Seller Insights
// Creates realistic, smooth up-and-down fluctuations for mock data across a 24-step loop cycle.
// Periodically cycles: at tick 0 and tick 24, all values return exactly to their authentic base values.

export const TOTAL_LOOP_TICKS = 24;
export const TICK_INTERVAL_MS = 2500; // 2.5 seconds per tick (60 seconds full loop)

/**
 * Get periodic sine multiplier for a given tick and phase offset.
 * Returns a value between -1.0 and +1.0 that smoothly loops every TOTAL_LOOP_TICKS.
 */
export function getLoopSine(tick, phaseOffset = 0) {
  const angle = ((tick % TOTAL_LOOP_TICKS) / TOTAL_LOOP_TICKS) * 2 * Math.PI;
  return Math.sin(angle + phaseOffset);
}

/**
 * Fluctuate a volume string like '54.200 / bln' or '14.200 / mgg'.
 */
export function fluctuateSearchVolume(baseStr, sinVal, variance = 0.018) {
  if (!baseStr || typeof baseStr !== 'string') return baseStr;
  const match = baseStr.match(/^([\d\.]+)\s*\/\s*(.+)$/);
  if (!match) return baseStr;

  const rawNum = parseInt(match[1].replace(/\./g, ''), 10);
  if (isNaN(rawNum)) return baseStr;

  const delta = Math.round(rawNum * variance * sinVal);
  const newNum = Math.max(100, rawNum + delta);
  return `${newNum.toLocaleString('id-ID')} / ${match[2]}`;
}

/**
 * Fluctuate percentage delta strings like '+28%', '+24.5%', '-1.8%'.
 */
export function fluctuatePercentDelta(baseDeltaStr, sinVal, maxVariance = 0.9) {
  if (!baseDeltaStr || typeof baseDeltaStr !== 'string') return baseDeltaStr;
  const match = baseDeltaStr.match(/^([+-]?)([\d\.]+)%$/);
  if (!match) return baseDeltaStr;

  const sign = match[1] === '-' ? -1 : 1;
  const rawVal = parseFloat(match[2]) * sign;

  const newRaw = rawVal + (sinVal * maxVariance);
  const formattedSign = newRaw >= 0 ? '+' : '';
  return `${formattedSign}${newRaw.toFixed(1)}%`;
}

/**
 * Generate simulated live opportunities for a given loop tick.
 */
export function generateLiveOpportunities(baseOpportunities, tick, timeframeMap = {}, influencersMap = {}) {
  return baseOpportunities.map((opp, idx) => {
    // Unique phase offset per opportunity so rows do not move in lockstep
    const phase = idx * 1.35;
    const sinPrimary = getLoopSine(tick, phase);
    const sinSecondary = getLoopSine(tick, phase + 1.2);

    // Active listings: subtle change of +- 1 to 2 listings
    const listingsDeltaNum = Math.round(sinPrimary * Math.max(1, Math.min(2, Math.round(opp.activeListings * 0.05))));
    const liveActiveListings = Math.max(1, opp.activeListings + listingsDeltaNum);

    // Demand per listing: subtle +- 1.5% to +- 2.5%
    const demandDeltaNum = Math.round(opp.demandPerListing * 0.02 * sinSecondary);
    const liveDemandPerListing = Math.max(10, opp.demandPerListing + demandDeltaNum);

    // Search volume base
    const liveSearchVolume = fluctuateSearchVolume(opp.searchVolume, sinPrimary, 0.016);

    // Live timeframe trend data for all 4 timeframes
    const liveTrends = {};
    ['7d', '30d', '90d', '12m'].forEach((tf, tfIdx) => {
      const baseTrend = timeframeMap[opp.id]?.[tf] || {
        trend: opp.trend || 'Stabil',
        delta: opp.trend === 'Naik' ? '+15%' : '+2%',
        searchVolume: opp.searchVolume,
        caution: opp.trendCaution,
        demandDelta: '+12.5%',
        listingsDelta: '+3.5%'
      };

      const tfSin = getLoopSine(tick, phase + tfIdx * 0.5);
      liveTrends[tf] = {
        ...baseTrend,
        searchVolume: fluctuateSearchVolume(baseTrend.searchVolume, tfSin, 0.018),
        delta: fluctuatePercentDelta(baseTrend.delta, tfSin, 0.8),
        demandDelta: fluctuatePercentDelta(baseTrend.demandDelta, tfSin, 0.7),
        listingsDelta: fluctuatePercentDelta(baseTrend.listingsDelta, tfSin, 0.5)
      };
    });

    // Live influencers with slightly oscillating engagement rate
    const baseInfluencers = influencersMap[opp.id] || [];
    const liveInfluencers = baseInfluencers.map((inf, infIdx) => {
      const infSin = getLoopSine(tick, phase + infIdx * 1.5);
      const erDelta = parseFloat((infSin * 0.25).toFixed(1));
      const liveER = Math.max(1.0, parseFloat((inf.engagementRate + erDelta).toFixed(1)));
      return {
        ...inf,
        engagementRate: liveER
      };
    });

    return {
      ...opp,
      searchVolume: liveSearchVolume,
      activeListings: liveActiveListings,
      demandPerListing: liveDemandPerListing,
      liveTrends,
      liveInfluencers,
      _tick: tick
    };
  });
}

/**
 * Generate simulated live listings for a given loop tick.
 */
export function generateLiveListings(baseListings, tick) {
  return baseListings.map((item, idx) => {
    const phase = idx * 1.25;
    const sin1 = getLoopSine(tick, phase);
    const sin2 = getLoopSine(tick, phase + 0.8);

    // Subtle natural variations for metrics
    const impressionsDelta = Math.round(item.impressions * 0.015 * sin1);
    const liveImpressions = Math.max(10, item.impressions + impressionsDelta);

    const clicksDelta = Math.round(item.clicks * 0.02 * sin2);
    const liveClicks = Math.max(1, item.clicks + clicksDelta);

    const cartDelta = Math.round(item.addToCart * 0.022 * sin1);
    const liveAddToCart = Math.max(0, item.addToCart + cartDelta);

    const purchasesDelta = Math.round(item.purchases * 0.025 * sin2);
    const livePurchases = Math.max(0, item.purchases + purchasesDelta);

    // Sparkline live breathing on latest point
    let liveSparkline = item.sparkline;
    if (Array.isArray(item.sparkline) && item.sparkline.length > 0) {
      const lastIndex = item.sparkline.length - 1;
      const lastVal = item.sparkline[lastIndex];
      const sparkDelta = Math.round(lastVal * 0.03 * sin2);
      liveSparkline = [
        ...item.sparkline.slice(0, lastIndex),
        Math.max(1, lastVal + sparkDelta)
      ];
    }

    return {
      ...item,
      impressions: liveImpressions,
      clicks: liveClicks,
      addToCart: liveAddToCart,
      purchases: livePurchases,
      sparkline: liveSparkline,
      _tick: tick
    };
  });
}

/**
 * Generate simulated live KPI cards for Beranda.
 */
export function generateLiveKpis(tick) {
  const sin1 = getLoopSine(tick, 0.2);
  const sin2 = getLoopSine(tick, 1.4);
  const sin3 = getLoopSine(tick, 2.6);
  const sin4 = getLoopSine(tick, 3.8);

  const baseTayangan = 142850;
  const liveTayangan = baseTayangan + Math.round(sin1 * 680);

  const baseCtr = 4.2;
  const liveCtr = (baseCtr + (sin2 * 0.12)).toFixed(1);

  const baseCart = 1820;
  const liveCart = baseCart + Math.round(sin3 * 28);

  const basePurchases = 640;
  const livePurchases = basePurchases + Math.round(sin4 * 14);

  return {
    tayangan: {
      value: liveTayangan.toLocaleString('id-ID'),
      delta: fluctuatePercentDelta('+12.4%', sin1, 0.6),
      sparklineData: [110, 125, 134, Math.round(142 + sin1 * 3)]
    },
    ctr: {
      value: `${liveCtr}%`,
      delta: fluctuatePercentDelta('+0.6%', sin2, 0.2),
      sparklineData: [3.5, 3.8, 4.0, parseFloat((4.2 + sin2 * 0.1).toFixed(1))]
    },
    keranjang: {
      value: liveCart.toLocaleString('id-ID'),
      delta: fluctuatePercentDelta('+8.1%', sin3, 0.5),
      sparklineData: [1520, 1610, 1700, Math.round(1820 + sin3 * 25)]
    },
    pembelian: {
      value: livePurchases.toLocaleString('id-ID'),
      delta: fluctuatePercentDelta('-1.2%', sin4, 0.4),
      sparklineData: [680, 665, 650, Math.round(640 + sin4 * 12)]
    }
  };
}
