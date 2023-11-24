/* import { useEffect } from "react";

function TitleAnim() {
  useEffect(() => {
    const originalTitle = 'Weather App';
    const spaceGap = '\u00A0'.repeat(10);
    const combinedTitle = originalTitle + spaceGap;
    let scrollPos = 0;

    const scrollTitle = () => {
      if (scrollPos >= combinedTitle.length) {
        scrollPos = 0;
      }

      document.title = combinedTitle.substring(scrollPos) + combinedTitle.substring(0, scrollPos);
      scrollPos++;

      setTimeout(scrollTitle, 300);
    };

    scrollTitle();

    return () => {
      clearTimeout(scrollTitle);
      document.title = originalTitle;
    };
  }, []);

  return null;
}

export default TitleAnim;
 */