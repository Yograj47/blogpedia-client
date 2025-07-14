function truncateText(str, wordLimit = 30, charLimit = 150) {
  const words = str.trim().split(" ").slice(0, wordLimit);
  const preview = words.join(" ");
  return preview.length < charLimit ? preview + "..." : preview;
}

export default truncateText;
