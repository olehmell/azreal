import React, { FunctionComponent, useRef } from 'react';
import { useRouter } from 'next/router';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiIcon,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiShowFor,
} from '@elastic/eui';

import { buildExploreLinks } from '../navigation_links/explore_links';

import { Breadcrumbs } from './breadcrumbs';
import SwitchTheme from './switch_theme';

import styles from './chrome.module.scss';

const Logo: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiHeaderLogo
    iconType='/images/airzoom.svg'
    onClick={onClick}
    aria-label='Goes to home'
  />
);

const MenuTrigger: FunctionComponent<{ onClick: () => void }> = ({
  onClick,
}) => (
  <EuiHeaderSectionItemButton aria-label='Open nav' onClick={onClick}>
    <EuiIcon type='apps' href='#' size='m' />
  </EuiHeaderSectionItemButton>
);

const Chrome: FunctionComponent = ({ children }) => {
/**
 * Renders the UI that surrounds the page content.
 */
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  const navDrawerRef = useRef<EuiNavDrawer>(null)

  const router = useRouter();

  // In this example app, all the side navigation links go to a placeholder
  // page. That's why the `push` call here points at the catch-all route - the
  // Next.js router doesn't infer the catch-all, we have to link to it
  // explicitly.
  const buildOnClick = (path: string) => () =>
    router.push(path, path)

  return (
    <>
      <EuiHeader className={styles.chrHeader}>
        <EuiHeaderSection grow={false}>
          <EuiShowFor sizes={[ 'xs', 's' ]}>
            <EuiHeaderSectionItem border='right'>
              <MenuTrigger onClick={() => navDrawerRef.current!.toggleOpen()} />
            </EuiHeaderSectionItem>
          </EuiShowFor>

          <EuiHeaderSectionItem border='right'>
            <Logo onClick={() => router.push('/')} />
          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem border='right'>
            {/* <HeaderSpacesMenu /> */}
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <Breadcrumbs />

        <EuiHeaderSection side='right'>
          <EuiHeaderSectionItem className={styles.chrHeaderSectionItem}>
            <SwitchTheme />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
      <EuiNavDrawer ref={navDrawerRef}>
        <EuiNavDrawerGroup listItems={buildExploreLinks(buildOnClick)} />
      </EuiNavDrawer>
      <div className={styles.chrWrap}>{children}</div>
    </>
  );
};

export default Chrome;
