import { NavigationParams, NavigationRoute } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import { Presentable } from './Presentable';

export abstract class Screen<TPresenter, TState = {}> extends Presentable<TPresenter, NavigationInjectedProps, TState> {}

interface NavigationInjectedProps<P = NavigationParams> {
    navigation: NavigationStackProp<NavigationRoute<P>, P>;
}
