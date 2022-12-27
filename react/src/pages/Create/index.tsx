/* eslint-disable no-console */
import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import {
  Layout,
  PageHeader,
  PageBlock,
  Input,
  Textarea,
  Checkbox,
  ButtonWithIcon,
  IconUpload,
} from 'vtex.styleguide'

import { templateNameFormatter } from '../../utils'

interface NewTemplateProps {
  FriendlyName: string
  Name: string
  templateDescription?: string
  templateSender?: string
  templateReceiver?: string
  emailTitle?: string
  receiverCopy?: string
}

export const CreateTemplate = () => {
  const { navigate } = useRuntime()
  const intl = useIntl()

  const [activeEmail, setActiveEmail] = useState(false)
  const [newTemplate, setNewTemplate] = useState<NewTemplateProps>(
    {} as NewTemplateProps
  )

  const uploadIcon = <IconUpload />

  function handleNewTemplateInfo(e: ChangeEvent<HTMLInputElement>) {
    setNewTemplate({ ...newTemplate, [e.target.name]: e.target.value })

    if (e.target.name === 'FriendlyName') {
      setNewTemplate({
        ...newTemplate,
        FriendlyName: e.target.value,
        Name: templateNameFormatter(e.target.value),
      })
    }
  }

  return (
    <>
      <Layout
        fullWidth
        pageHeader={
          <PageHeader
            title={
              <FormattedMessage id="admin.email-builder.navigation.label-title" />
            }
            subtitle={
              <FormattedMessage id="admin.email-builder.subtitle.label-title" />
            }
            linkLabel={
              <FormattedMessage id="admin.email-builder.backLink.label" />
            }
            onLinkClick={() => {
              navigate({
                page: 'admin.app.emailbuilder',
              })
            }}
          />
        }
      >
        <PageBlock>
          <h3>
            <FormattedMessage id="admin.email-builder.createPage.label" />
          </h3>
          <div>
            <Input
              name="FriendlyName"
              placeholder={intl.formatMessage({
                id: 'admin.email-builder.createPage.nameInput.placeholder',
              })}
              size="regular"
              label={
                <FormattedMessage id="admin.email-builder.createPage.nameInput.label" />
              }
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleNewTemplateInfo(e)
              }
            />
            <Textarea
              name="Description"
              label={
                <FormattedMessage id="admin.email-builder.createPage.descriptionInput.label" />
              }
              placeholder={intl.formatMessage({
                id:
                  'admin.email-builder.createPage.descriptionInput.placeholder',
              })}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleNewTemplateInfo(e)
              }
            />
          </div>
          <Checkbox
            checked={activeEmail}
            id="activeEmail"
            label="Ativar envio de email"
            name="default-checkbox-group"
            onChange={() => setActiveEmail(!activeEmail)}
            value="activeEmail"
          />
          {activeEmail ? (
            <>
              <Input
                placeholder={intl.formatMessage({
                  id: 'admin.email-builder.createPage.senderInput.placeholder',
                })}
                size="regular"
                label={
                  <FormattedMessage id="admin.email-builder.createPage.senderInput.label" />
                }
                required
              />
              <Input
                placeholder={intl.formatMessage({
                  id:
                    'admin.email-builder.createPage.emailTitleInput.placeholder',
                })}
                size="regular"
                label={
                  <FormattedMessage id="admin.email-builder.createPage.emailTitleInput.label" />
                }
                required
              />
              <Input
                placeholder={intl.formatMessage({
                  id:
                    'admin.email-builder.createPage.receiverInput.placeholder',
                })}
                size="regular"
                label={
                  <FormattedMessage id="admin.email-builder.createPage.receiverInput.label" />
                }
                required
              />
              <Input
                placeholder={intl.formatMessage({
                  id:
                    'admin.email-builder.createPage.receiverCopyInput.placeholder',
                })}
                size="regular"
                label={
                  <FormattedMessage id="admin.email-builder.createPage.receiverCopyInput.label" />
                }
              />
            </>
          ) : (
            ''
          )}
          <ButtonWithIcon
            variation="primary"
            icon={uploadIcon}
            onClick={() =>
              navigate({
                page: 'admin.app.emailbuilderCreate',
              })
            }
            disabled={newTemplate.Name === undefined || newTemplate.Name === ''}
          >
            <FormattedMessage id="admin.email-builder.createButton.label" />
          </ButtonWithIcon>
        </PageBlock>
      </Layout>
    </>
  )
}
