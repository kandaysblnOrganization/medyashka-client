import React, {FC} from 'react';

interface LayoutProps {
    hasFooter: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
    const {
        hasFooter
    } = props;
    return (
        <>

        </>
    );
};

export default Layout;