export function mapHeroToProps({
  backgroundImage,
  ctaBtnOne,
  ctaBtnTwo,
  _key,
  heroText,
}) {
  return {
    headline: heroText,
    image: backgroundImage.asset.ref,
    buttonOne: {
      text: ctaBtnOne.buttonText,
      to: ctaBtnOne.to,
    },
    ctaBtnOne: ctaBtnOne,
    ctaBtnTwo: ctaBtnTwo,
    key: _key,
  }
}
