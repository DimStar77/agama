/*
 * Copyright (c) [2025] SUSE LLC
 *
 * All Rights Reserved.
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, contact SUSE LLC.
 *
 * To contact SUSE LLC about this file by physical or electronic mail, you may
 * find current contact information at www.suse.com.
 */

import React, { useState } from "react";
import {
  Button,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Flex,
  Switch,
} from "@patternfly/react-core";
import { NestedContent, Page, Popup } from "~/components/core";
import QR from "~/assets/fake-qr.svg";
import { _ } from "~/i18n";

export default function SystemInformationSection() {
  const [qrVisible, setQrVisible] = useState(false);

  const showQr = () => setQrVisible(true);
  const hideQr = () => setQrVisible(false);

  return (
    <>
      <Page.Section title={_("System Information")}>
        <NestedContent margin="mMd">
          <DescriptionList
            isHorizontal
            isCompact
            displaySize="lg"
            horizontalTermWidthModifier={{ lg: "15ch" }}
          >
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Model")}</DescriptionListTerm>
              <DescriptionListDescription>
                {_("Lenovo ThinkPad P14s Gen 4")}
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Processor")}</DescriptionListTerm>
              <DescriptionListDescription>
                {_("AMD Ryzen™ 7 PRO 7840U w/ Radeon™ 780M Graphics × 16")}
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Memory")}</DescriptionListTerm>
              <DescriptionListDescription>{_("64.0 GiB")}</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Language")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline>
                  {_("English")}
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Keyboard")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline>
                  {_("Spanish")}
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("IP")}</DescriptionListTerm>
              <DescriptionListDescription>{_("192.168.10.42")}</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Remotely accessible")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex alignItems={{ default: "alignItemsCenter" }}>
                  <Switch id="simple-switch" isChecked />
                  <Button variant="link" isInline onClick={showQr}>
                    {_("Show Qr code")}
                  </Button>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </NestedContent>
      </Page.Section>

      <Popup isOpen={qrVisible} variant="small" title={_("QR code for remote access")}>
        <img src={QR} alt="QR code for quick access to Agama" width="100%" />
        <Popup.Actions>
          <Popup.Cancel onClick={hideQr}>{_("Close")}</Popup.Cancel>
        </Popup.Actions>
      </Popup>
    </>
  );
}
