import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
  },
  controlsContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  albumImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  progressBar: {
    height: 20,
    width: 260,
  },
  songTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  songHeadline: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    paddingVertical: 30,
  },
  clockText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 32,
    height: 100,
    paddingTop: 30,
  },
});

export default styles;
