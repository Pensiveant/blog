import React, { useEffect } from 'react';
import styles from './App.less';
import testMark from './blog/GitHub pages.md';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

function App() {

  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      try { hljs.highlightBlock(block as any); }
      catch (e) { console.log(e); }
    });
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.blogWrap}
        dangerouslySetInnerHTML={{ __html: testMark }}
      >

      </div>
    </div>
  );
}

export default App;
