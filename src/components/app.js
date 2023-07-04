import { useMemo } from 'react';
import Header from './header';
import UptimeRobot from './uptimerobot';
import GithubIcon from './githubicon'

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <GithubIcon />
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>Powered By <a href='https://uptimerobot.com/' target='_blank'>Uptime Robot</a> & <a href='https://github.com/yb/uptime-status/' target='_blank'>Uptime Status</a> & <a href='https://solstice23.top/' target='_blank'>solstice23</a> & <a href='https://www.alongw.cn/' target='_blank'>alongw</a></p>
          
        </div>
      </div>
    </>
  );
}

export default App;
