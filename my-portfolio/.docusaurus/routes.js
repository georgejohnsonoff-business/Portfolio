import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Portfolio/__docusaurus/debug',
    component: ComponentCreator('/Portfolio/__docusaurus/debug', '707'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/config', 'a26'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/content', '9b8'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/globalData', '0cf'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/metadata', '0ba'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/registry', '7b3'),
    exact: true
  },
  {
    path: '/Portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/Portfolio/__docusaurus/debug/routes', '470'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
