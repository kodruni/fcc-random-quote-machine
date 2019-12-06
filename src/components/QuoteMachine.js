import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
// import Button from './Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  // you can also use <></> for Fragment 
  <Card>
    <CardContent>
      {/* replace this. with props */}
      { 
        // line 19 commented out as the logic defined in the App component
        // selectedQuote ? 
        <Typography id="text">
          {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
        </Typography>
      }
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
      <IconButton 
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine