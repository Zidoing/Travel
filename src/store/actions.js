export default {
  changeCity(ctx, city) {
    console.log(ctx);
    ctx.commit("changeCity", city)

  }
}
