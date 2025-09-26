export const isWorkshop = (activityType: string): boolean =>
  activityType.toLowerCase().trim() === 'taller'
