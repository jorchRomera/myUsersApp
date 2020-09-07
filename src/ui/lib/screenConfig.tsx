import React from 'react';

export const screenConfig = (ScreenComponent: any, createPresenter: any) => {
    const ScreenContainer = (props: any) => <ScreenComponent { ...props } createPresenter={ createPresenter } />;
    if (ScreenComponent.navigationOptions) {
        ScreenContainer.navigationOptions = ScreenComponent.navigationOptions;
    }

    return ScreenContainer;
};
