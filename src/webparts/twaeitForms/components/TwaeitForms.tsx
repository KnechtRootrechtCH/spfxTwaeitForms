import * as React from 'react';
import styles from './TwaeitForms.module.scss';
import { ITwaeitFormsProps } from './ITwaeitFormsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'TwaeitFormsWebPartStrings';
import TwaeitField from './TwaeitField';

export default class TwaeitForms extends React.Component<ITwaeitFormsProps, {}> {
  public render(): React.ReactElement<ITwaeitFormsProps> {
    return (
      <div className={ styles.twaeitForms }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{strings.WebPartTitle}</span>
              <p className={ styles.subTitle }>{strings.WebPartDescription}</p>
              <TwaeitField 
                label='gagu'
                description='test' 
                type='string'
                value='' />
              <p className={ styles.description }>{escape(this.props.description)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
