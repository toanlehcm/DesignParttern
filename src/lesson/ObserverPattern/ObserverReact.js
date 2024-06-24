import React, { useState, useEffect, useRef } from 'react';

// Observer component
const Observer = ({ name }) => {
  const notify = (message) => {
    console.log(`${name} received: ${message}`);
  };

  return { notify };
};

// Subject component
const Subject = () => {
  const observers = useRef([]);

  const addObserver = (observer) => {
    observers.current.push(observer);
  };

  const notifyAll = (message) => {
    observers.current.forEach(observer => observer.notify(message));
  };

  return { addObserver, notifyAll };
};

// Main component
const ObserverPatternReact = () => {
  const [count, setCount] = useState(0);
  const subject = useRef(Subject()).current;

  useEffect(() => {
    const observer1 = Observer({ name: 'Observer 1' });
    const observer2 = Observer({ name: 'Observer 2' });

    subject.addObserver(observer1);
    subject.addObserver(observer2);

    // Notify observers whenever count changes
    subject.notifyAll(`Count updated to ${count}`);
  }, [count, subject]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'blue' }}>Observer Pattern React</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default ObserverPatternReact;
