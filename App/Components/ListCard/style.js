import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardHeader: {
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
    color: '#848A94',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'column',
    gap: 1,
  },
  task: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    color:color.BLACK
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  cardFooter: {},
  progress: {
    backgroundColor: '#f3f3f3',
    borderRadius: 4,
    overflow: 'hidden',
    height: 15,
  },
  progressBar: {
    backgroundColor: '#4caf50',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    //   lineHeight: 8,
    textAlign: 'center',
  },
});
export default styles;
