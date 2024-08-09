const { DateTime } = require("luxon");

function toUTCDate(dateString) {
  // Parse the date string as a UTC date
  const dateObject = DateTime.fromISO(dateString, { zone: "utc" });
  // Format the date as an RFC 3339 string
  return dateObject.toISO({ includeOffset: true }) + "Yoohoo";
}

function excerpt(post) {
  const content = post.replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
}

function wordStats(content) {
  const wordCount = content.trim().split(/\s+/).length;
  const wordCountWithCommas = wordCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // More efficient than toLocaleString()
  const wordsPerMinute = 200; // Average reading speed
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return `${wordCountWithCommas} words • ${readingTimeMinutes} min read`;
}

module.exports = {
  toUTCDate,
  excerpt,
  wordStats,
};
