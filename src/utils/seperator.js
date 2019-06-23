export const Seperator = (string, limit) => {
    return string && string.length > limit
      ? string
          .trim()
          .substring(0, limit - 3)
          .trim() + '...'
      : string;
  };