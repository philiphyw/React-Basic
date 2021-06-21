import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',
        minHeight:'35rem',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        bottom:'1rem'
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },

}))