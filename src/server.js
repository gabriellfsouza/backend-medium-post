import app from './app';

app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('online');
});
