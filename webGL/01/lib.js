function initShader(gl, VERTEX_SHADER, FRAG_SHADER) {
  // 创建顶点着色器
  var vertex = gl.createShader(gl.VERTEX_SHADER);
  // 创建片源着色器
  var frag = gl.createShader(gl.FRAGMENT_SHADER);

  // 指定顶点着色器对象
  gl.shaderSource(vertex, VERTEX_SHADER);
  // 指定片元着色器对象
  gl.shaderSource(frag, FRAG_SHADER);

  // 编译顶点和片元着色器
  gl.compileShader(vertex);
  gl.compileShader(frag);

  // 创建程序对象
  var program = gl.createProgram();
  // 为程序分配顶点着色器对象
  gl.attachShader(program, vertex);
  // 为程序分配片元着色器对象
  gl.attachShader(program, frag);

  // 链接程序对象
  gl.linkProgram(program);

  // 告知使用对象
  gl.useProgram(program);
  return program;
}
