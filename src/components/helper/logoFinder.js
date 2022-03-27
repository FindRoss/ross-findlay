
import apexLogo from '../../assets/apex-legends-logo.png';
import dateLogo from '../../assets/save-the-date-logo.svg';
import flashcardLogo from '../../assets/flashcards-logo.png';

export const logoFinder = (title) => {
  switch (title) {
    case "Apex Legends Map":
      return apexLogo;
    case "Save The Date":
      return dateLogo;
    case "Flashcards":
      return flashcardLogo;
    default:
      return apexLogo;
  }
}