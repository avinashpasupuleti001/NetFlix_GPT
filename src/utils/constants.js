export const logo = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAchJje9GUBJ_ehbO0uOApH8QmRyuvK0LQI9obzFeGtfkpfLyh4FdolMZR4PtvyNoOomDcY7BzTbhFC3gJinH0UadYBg807AKDSPyfsUDm9T3CZKn9OSZN3II7060MZESFcb6YOS9jvzh.svg";
export const photoURL = "https://occ-0-6127-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229";

// export const API_KEY = {
//   method: 'GET',
//   headers: {accept: 'application/json', Authorization: 'Bearer ••••'}
// };
export const API_KEY = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w200';
export const bgUrl='https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_small.jpg'