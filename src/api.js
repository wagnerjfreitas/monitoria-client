import axios from 'axios';

const baseUrl = 'https://wa-prd-monatv-coletor.azurewebsites.net';
const token = '/216yPAwLs5ItfZdBPicDFochskH/Abs';
const serial = '18CDFA832058';

const apiAxios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {
  //   post: {     
  //     'Content-Type': 'application/json',
  //     TK: '/216yPAwLs4Cy4d3/46cqkd24ufMfohM',
  //     SR: '18CDFA832058',
  //     Cookie: '.AspNetCore.Session=CfDJ8NM5QaSExPRBn8eBu5nFK9nIX7EYAq2QYD7LKKokWYRG6TcAq9oqMAS4752wRs374z4HKMiwf0qmMdqIL6oZHd2csba7zlAVsDoGajTp%2FNVicwvH%2BpqJEG%2FDbOJ%2FZBZrIA5469HoDitvvGei8rma0Eil6XZUzKyb28Bli0Ta%2BRuW',
  //   }
  // }
});

export const api = {

  postAccessBySerial: async () => {
    const body = {
      token: token
    };

    const configs = {
      headers: {
        'Content-Type': 'application/json',
        Cookie: '.AspNetCore.Session=CfDJ8NM5QaSExPRBn8eBu5nFK9nIX7EYAq2QYD7LKKokWYRG6TcAq9oqMAS4752wRs374z4HKMiwf0qmMdqIL6oZHd2csba7zlAVsDoGajTp%2FNVicwvH%2BpqJEG%2FDbOJ%2FZBZrIA5469HoDitvvGei8rma0Eil6XZUzKyb28Bli0Ta%2BRuW',
      }
    }

    try {
      const response = await apiAxios.post(`/AccessBySerial/${serial}`, JSON.stringify(body), configs)
      console.log('response: ', response);
      return response.ok;
    } catch (error){
      console.log('Error:postAccessBySerial:', JSON.stringify(error.message))
      return false
    }
  },

  postFile: async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        TK: token,
        SR: serial,
        Cookie: '.AspNetCore.Session=CfDJ8NM5QaSExPRBn8eBu5nFK9nIX7EYAq2QYD7LKKokWYRG6TcAq9oqMAS4752wRs374z4HKMiwf0qmMdqIL6oZHd2csba7zlAVsDoGajTp%2FNVicwvH%2BpqJEG%2FDbOJ%2FZBZrIA5469HoDitvvGei8rma0Eil6XZUzKyb28Bli0Ta%2BRuW',
      }
  };

    const body = {
      "FileInfo": {
          "FileIntentionId": "f4aa1d20-bf73-41b4-98f9-eae11e921e2f",
          "StationID": "d46d4c71-c855-41ca-abf8-1be57f7cf1b4",
          "StationName": serial,
          "StationSerial": serial,
          "FileFullPath": "./OPERATIONS_060722.zip",
          "Cnpj": "54517628000198",
          "Requester": "Admin",
          "BlobLink": null,
          "Status": 7,
          "CreateDate": "2022-07-20T19:37:52.709Z",
      },
      "FileBytes": "UEsDBBQAAAAIAPB29FS/mNj46AEAAOILAAAJAAAAanNvbjYudHh07VbRbpswFH2v1H+I/Jwg2wkk8EYLmTKRwAqt1K578MBt0BIbGTKlqvI9+5D92IxDo0BJNVWLtknxA7K551zf63t85efzs06nA9xlJmhOgPWs1uWvy1nwEViGORiZhgkhRENd2TbdLcXOFmlMYsKvaEEeV0Qkkv75hb7zU0InCbCAdKFGr+XzMkC3TrMztUmRciY92NeRH96GkTtt4JxA8GRV8LcwSYWZsIIKxt8XkLNL+s1wLkj8zX94SGMKLLZaLBrmqQxkwVtMnmSweL8KlSGia5XdNGVz0lGwnz8I2ENVVanwASnm7prGkhJb9/dE5p0/5QVd7s81uqb1yEuKR9ljMQeW3h+ZpvHK7JBCJgUwxLgHUQ8bETKtAbJ0rPV1HQ8xuqv7vKEiJ1wWUrIQ1PraoG4PP1w40jROBf2aiqSNXEGw1ihHSMX3NOGiPBj70/VkZkNUR8z4kipu4IeRP7YvJ14dEJElYXOuMMiAxnCE8GB3rhs1+dIUfODcHFnpcofhYY27Uym7o8u7LYZ9YYPQ9Tz3qgk5ifu/FPe2bPmxdT0OffuwsA8l8ufV3dKVf7Npt+Vw6tv/mLS7f1PEr/vmSb6nZ0f3/Z2ZpQUXae1xvr1gpZw1qCF5wRpP8yx6ymQfQ+dnm19QSwECFAAUAAAACADwdvRUv5jY+OgBAADiCwAACQAAAAAAAAAAAAAAAAAAAAAAanNvbjYudHh0UEsFBgAAAAABAAEANwAAAA8CAAAAAA==",
    }
    try {
      const response = await apiAxios.post('/File/PostFileByStationSerie', body)
      console.log('response: ', response);
      return response.ok;
    } catch (error){
      console.log('Error:postFile:', JSON.stringify(error.message))
      return false
    }
  },
}

export const testAccessBySerial = () => {
  var data = JSON.stringify({
    "token": "/216yPAwLs5q0J0VXmOPYOIl2kFu21Jj"
  });
  
  var config = {
    method: 'post',
    url: `${baseUrl}/AccessBySerial/${serial}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': '.AspNetCore.Session=CfDJ8NM5QaSExPRBn8eBu5nFK9nIX7EYAq2QYD7LKKokWYRG6TcAq9oqMAS4752wRs374z4HKMiwf0qmMdqIL6oZHd2csba7zlAVsDoGajTp%2FNVicwvH%2BpqJEG%2FDbOJ%2FZBZrIA5469HoDitvvGei8rma0Eil6XZUzKyb28Bli0Ta%2BRuW; .AspNetCore.Session=CfDJ8CFN6LcvdFhNncRBgQsZtxzYte7Ml1kgN6cUM8gqlQN%2FrItS99LTXtDnwVqQuQhLe4VoO0NwYwPvoA7I%2Bc7TnwRDEwdfeq1tOXDyd3JsBiDHAHAt8ftzdS0YqoReoYhoQ9QsEq5k9BFlKMCaHS18KFMWlVGsAjnJ0k7FhCOaj6TS',
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}


