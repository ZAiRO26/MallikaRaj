import { onCLS, onFID, onLCP, onFCP, onTTFB, Metric } from 'web-vitals';

/**
 * Reports web vitals metrics to the provided callback.
 *
 * @param onPerfEntry - Function that receives performance metrics.
 */
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
