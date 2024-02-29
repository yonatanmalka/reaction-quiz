export const pageview = () => {
  window.fbq("track", "PageView")
}

export const event = (name, options = {}, eventID = {}) => {
  fbq("trackCustom", name, options, eventID);
};
