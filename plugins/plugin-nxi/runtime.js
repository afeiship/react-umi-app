/* eslint-disable import/no-dynamic-require */
// import React from 'react';
const React = require('react');
const { useStore, getDvaApp } = require('umi');

const Root = props => {
  console.log(props);
  return <div className="__rua-root__">{props.children}</div>;
};

function rootContainer(container) {
  // console.log('load nxi runtime rootContainer');
  // console.log(require('umi'));
  window.umi = require('umi');
  // return <Root>{container}</Root>;
  return React.createElement(Root, null, container);
}

module.exports = {
  rootContainer,
};
