import React from 'react'

import { TemplateCard } from '../TemplateCard'
import styles from './styles.css'

export const TemplateList = () => {
  const templates = [
    {
      templateName: 'Teste 1',
      templateDescription:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      isDefault: true,
    },
    {
      templateName: 'Teste 2',
      templateDescription: 'lorem ipsum dolor sit amet',
      isDefault: true,
    },
    {
      templateName: 'Teste 3',
      templateDescription: 'lorem ipsum dolor sit amet',
      isDefault: false,
    },
    {
      templateName: 'Teste 4',
      templateDescription: 'lorem ipsum dolor sit amet',
      isDefault: true,
    },
    {
      templateName: 'Teste 5',
      templateDescription: 'lorem ipsum dolor sit amet',
      isDefault: false,
    },
    {
      templateName: 'Teste 6',
      templateDescription: 'lorem ipsum dolor sit amet',
      isDefault: false,
    },
  ]

  return (
    <div className={styles['emailBuilder-list--container']}>
      {templates.map((template) => (
        <TemplateCard
          key={template.templateName}
          templateName={template.templateName}
          templateDescription={template.templateDescription}
          isDefault={template.isDefault}
        />
      ))}
    </div>
  )
}
