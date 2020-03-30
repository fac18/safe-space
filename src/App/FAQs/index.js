import React from 'react';

const Collapse = props => {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
  const style = {
    collapsed: {
      display: 'none',
    },
    expanded: {
      display: 'block',
    },
    buttonStyle: {
      display: 'block',
      width: '100%',
    },
  };
  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className='collapse-content'
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
};

export { Collapse };
