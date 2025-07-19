export const getIconDims = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
  const baseWidths = {
    xs: 12,
    sm: 18,
    md: 24,
    lg: 32,
    xl: 40,
  }
  return baseWidths[size]?.toString() || "24"
}
