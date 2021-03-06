import React from 'react';
import classNames from 'classnames';
import './form-section-body.scss';

const formSectionBody = ({ cssClasses, style, id, children }) => {
    return (
        <div className={classNames('form-section-body', cssClasses)} style={style} id={id}>
            {children}
        </div>
    );
};

export { formSectionBody as FormSectionBody };
