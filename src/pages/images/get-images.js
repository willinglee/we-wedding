const allFiles = (ctx => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
  console.log(values);
  return values;
})(require.context('./', true, /.jpg/));

export default allFiles;
