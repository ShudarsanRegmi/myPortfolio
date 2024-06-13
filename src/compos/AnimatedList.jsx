import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import htmlIcon from '/html.svg'
import styles from './AnimatedList.module.css'
import classnames from 'classnames';


const items = [
  { id: 1, title: 'React', subtitle: 'I\'ve a good experience with react. I\'ve explored most of the intermediate concepts of react.' },
  { id: 2, title: 'Title 2', subtitle: 'Subtitle 2' },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3' },
];

const AnimatedList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.mainCon}>
      {items.map(item => (
        <motion.div
          className={classnames(styles.con)}
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          style={{ marginBottom: 20, cursor: 'pointer' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h2 className={classnames("font-bold text-2xl")}>{item.title}</motion.h2>
          <motion.h5 className={classnames(styles.para)}>{item.subtitle}</motion.h5>
          <motion.div className={classnames(styles.cardImgCon)}>
            <motion.img src={htmlIcon}  className={classnames(styles.cardimg)}/>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: 20,
              zIndex: 1000,
              borderRadius: 10,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map(item => item.id === selectedId && (
              <div key={item.id}>
                <motion.h1>{item.title}</motion.h1>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  style={{ marginTop: 20 }}
                >
                  Close
                </motion.button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedList;
