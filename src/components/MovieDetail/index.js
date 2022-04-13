import PropTypes from 'prop-types';
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';
import Image from '../Image';
import CloseIcon from '@mui/icons-material/Close';

const fakeText = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

export default function MovieDetail({
  open,
  onClose,
  title,
  overview,
  posterPath,
}) {
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" data-testid="dialog">
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.main,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <DialogContent sx={{ padding: '40px 30px' }}>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 500px',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: 532,
                width: 355,
                borderRadius: '6px',
                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Image
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}
                alt={title}
              />
            </Box>

            <Box
              sx={{
                flex: '1 0 500px',
                maxHeight: 532,
                overflow: 'auto',
                padding: '30px',
              }}
            >
              <Typography
                variant="h4"
                component="h5"
                sx={{ fontWeight: 'bold', mb: 3 }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: 'text.secondary' }}
              >
                {overview || fakeText}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

MovieDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  overview: PropTypes.string.isRequired,
};
