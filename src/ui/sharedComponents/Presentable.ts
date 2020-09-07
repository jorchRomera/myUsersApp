import React from 'react';

export abstract class Presentable<TPresenter, TProps = {}, TState = {}> extends React.Component<TProps, TState> {
    protected presenter: TPresenter;

    constructor(props: Readonly<TProps> & { createPresenter: any }) {
        super(props);
        this.presenter = props.createPresenter(this);
    }

    componentWillUnmount(): void {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore Because lack of interface instanceof check
        if (this.presenter.dispose) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.presenter.dispose();
        }
    }
}
