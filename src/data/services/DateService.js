const RelativeFormatter = new Intl.RelativeTimeFormat('pt', {
  style: 'long',
});

export const DateService = {
  difference(date) {
    const now = new Date();
    let difference = (now.getTime() - new Date(date).getTime()) / 1000,
      type = '';

    if (difference < 60) {
      type = 'seconds';
      difference = Math.round(difference);
    } else if (difference < 60 * 60) {
      type = 'minutes';
      difference = Math.round(difference / 60);
    } else if (difference < 60 * 60 * 24) {
      type = 'hours';
      difference = Math.round(difference / 60 / 60);
    } else if (difference < 60 * 60 * 24 * 30) {
      type = 'days';
      difference = Math.round(difference / 60 / 60 / 24);
    } else if (difference < 60 * 60 * 24 * 30 * 12) {
      type = 'months';
      difference = Math.round(difference / 60 / 60 / 24 / 30);
    } else if (difference > 60 * 60 * 24 * 30 * 12) {
      type = 'years';
      difference = Math.round(difference / 60 / 60 / 24 / 30 / 12);
    }

    return { difference, type };
  },

  relativeDate(date) {
    const { difference, type } = this.difference(date);
    return RelativeFormatter.format(-difference, type);
  },
};
