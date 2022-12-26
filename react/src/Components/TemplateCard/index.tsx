import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Card, ButtonWithIcon, IconEdit, IconDelete } from 'vtex.styleguide'

import styles from './styles.css'

interface TemplateCardProps {
  templateName: string
  templateDescription: string
  isDefault: boolean
}

export const TemplateCard = ({
  templateName,
  templateDescription,
  isDefault,
}: TemplateCardProps) => {
  const trashIcon = <IconDelete />
  const editIcon = <IconEdit />

  return (
    <>
      <div className={styles['emailbuilder-card--wrapper']}>
        <Card>
          <div className={styles['emailbuilder-card--header']}>
            <h4>{templateName}</h4>
            <span>{isDefault ? 'default' : 'custom'}</span>
          </div>
          <p>{templateDescription}</p>
          <div className={styles['emailbuilder-card--buttons']}>
            <ButtonWithIcon icon={editIcon} variation="secondary">
              <FormattedMessage id="admin.email-builder.editButton.label" />
            </ButtonWithIcon>
            <ButtonWithIcon icon={trashIcon} variation="danger">
              <FormattedMessage id="admin.email-builder.deleteButton.label" />
            </ButtonWithIcon>
          </div>
        </Card>
      </div>
    </>
  )
}
