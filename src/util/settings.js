import axios from "axios";


//File này chứa TOKEN
export const TOKEN_CYBERSOFT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM1MDA4MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzY0ODQwMH0.ufODEd--n4Nm91XfL2RnIB9E1_kvZ4Dy1dyDst3wKuE';
export const GROUP_ID = 'GP01';
export const USER_LOGIN ='userLogin';
export const ACCESS_TOKEN ='accessToken';


//Cấu hình interceptor cho axios (tất cả request gọi = axios đều được cấu hình)
// export const http = axios.create({
//   baseURL:'http://movienew.cybersoft.edu.vn',
//   timeout:30000
// })

// http.interceptors.request.use(config => {
//   config.headers = {
//     ...config.headers,
//     'TokenCybersoft': TOKEN_CYBERSOFT,
//     'Authorization' : localStorage.getItem(ACCESS_TOKEN)?null :localStorage.getItem(ACCESS_TOKEN)
//   }

//   return config;
// },(errors) => {
//   return Promise.reject(errors)
// })


export const http =axios.create({
  baseURL:'http://movienew.cybersoft.edu.vn',
  timeout:30000
})
http.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'TokenCybersoft':TOKEN_CYBERSOFT,
    'Authorization':localStorage.getItem(ACCESS_TOKEN) ? null : localStorage.getItem(ACCESS_TOKEN)
  }


  return config;
},(error) => {
  return Promise.reject(error);

})

let promise =axios({
  url :'https://thanhnien.vn/ajax/diemthi.aspx?kythi=THPT&nam=2021&city=DDT&text=02000163&top=no',
  method:'GET'
})

promise.then(result => {
  console.log(result.data)
})
promise.catch(error => console.log(error))