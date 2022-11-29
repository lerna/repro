import React from 'react';

const MFE1 = React.lazy(() => import('mfe1/app'));
const MFE2 = React.lazy(() => import('mfe2/app'));
const MFE3 = React.lazy(() => import('mfe3/app'));
const MFE4 = React.lazy(() => import('mfe4/app'));
const MFE5 = React.lazy(() => import('mfe5/app'));
const MFE6 = React.lazy(() => import('mfe6/app'));
const MFE7 = React.lazy(() => import('mfe7/app'));
const MFE8 = React.lazy(() => import('mfe8/app'));
const MFE9 = React.lazy(() => import('mfe9/app'));

export const App = () => {
  return <>
    <div>Host app</div>
    <React.Suspense fallback="Loading MFE1">
      <MFE1/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE2">
      <MFE2/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE3">
      <MFE3/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE4">
      <MFE4/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE5">
      <MFE5/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE6">
      <MFE6/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE7">
      <MFE7/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE8">
      <MFE8/>
    </React.Suspense>
    <React.Suspense fallback="Loading MFE9">
      <MFE9/>
    </React.Suspense>
  </>
}
