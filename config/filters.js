const { DateTime } = require("luxon");

function toUTCDate(dateString) {
  // Parse the date string as a UTC date
  const dateObject = DateTime.fromISO(dateString, { zone: "utc" });
  // Format the date as an RFC 3339 string
  return dateObject.toISO({ includeOffset: true }) + "Yoohoo";
}

// Footnotes are rendered twice: once as the margin copy spliced in beside the
// reference, once in the list at the foot of the post (see config/markdown.js).
// Anything counting or sampling the prose should see each footnote once.
function stripMarginNotes(content) {
  return content.replace(/<small class="fn-margin"[\s\S]*?<\/small>/g, "");
}

function excerpt(post) {
  const content = stripMarginNotes(post).replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
}

function wordStats(content) {
  const wordCount = stripMarginNotes(content).trim().split(/\s+/).length;
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
