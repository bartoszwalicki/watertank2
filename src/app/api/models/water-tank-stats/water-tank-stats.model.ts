export interface WaterTankStats {
  timestamp: string;
  waterLevelMm: number;
  tankId: string;
  percentageFill: number;
  waterLevelMmFromBottom: number;
}
