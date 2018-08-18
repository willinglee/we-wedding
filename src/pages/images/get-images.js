const allFiles = (ctx => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
  return values;
})(require.context('./', true, /.jpg/));

export default allFiles;
