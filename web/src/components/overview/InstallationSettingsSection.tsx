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

import React from "react";
import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Flex,
} from "@patternfly/react-core";
import { NestedContent, Page, Link } from "~/components/core";
import { _ } from "~/i18n";
import { HOSTNAME, L10N, NETWORK, STORAGE, USER } from "~/routes/paths";

export default function InstallationSettingsSection() {
  // TODO: Break out small components for each description. Descriptions should
  // be concise and informative, ideally one-liners, when not one or two word.
  // If actually needed for producing a better summary, a second, smaller line
  // could be added/explored. All entries should link to their corresponding
  // routes. For demo purposes, placeholder descriptions are hardcoded below.

  return (
    <>
      <Page.Section title={_("Installation Settings")}>
        <NestedContent margin="mMd">
          <DescriptionList
            isHorizontal
            isCompact
            displaySize="lg"
            horizontalTermWidthModifier={{ lg: "15ch" }}
          >
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Hostname")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Link to={HOSTNAME.root} variant="link" isInline>
                  {_("prototype")}
                </Link>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Language and region")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}>
                  <Link to={L10N.root} variant="link" isInline>
                    {_("English (United Kingdomn)")}
                  </Link>
                  <small>{_("Spanish keyboard and Canary Islands timezone")}</small>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
            {/* <DescriptionListGroup> */}
            {/*   <DescriptionListTerm>{_("Network")}</DescriptionListTerm> */}
            {/*   <DescriptionListDescription> */}
            {/*     <Link to={NETWORK.root} variant="link" isInline> */}
            {/*       {_("Not configured")} */}
            {/*     </Link> */}
            {/*   </DescriptionListDescription> */}
            {/* </DescriptionListGroup> */}
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Network")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}>
                  <Link to={NETWORK.root} variant="link" isInline>
                    {_("Configured (DHCP)")}
                  </Link>
                  <small>{_("10.10.10.5, 192.168.168.100, and 2 more")}</small>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
            {/* <DescriptionListGroup> */}
            {/*   <DescriptionListTerm>{_("Network")}</DescriptionListTerm> */}
            {/*   <DescriptionListDescription> */}
            {/*     <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}> */}
            {/*       <Link to={NETWORK.root} variant="link" isInline> */}
            {/*         {_("Configured (Static IP)")} */}
            {/*       </Link> */}
            {/*       <small>{_("10.10.10.5, 192.168.168.100, and 2 more")}</small> */}
            {/*     </Flex> */}
            {/*   </DescriptionListDescription> */}
            {/* </DescriptionListGroup> */}
            {/* <DescriptionListGroup> */}
            {/*   <DescriptionListTerm>{_("Network")}</DescriptionListTerm> */}
            {/*   <DescriptionListDescription> */}
            {/*     <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}> */}
            {/*       <Link to={NETWORK.root} variant="link" isInline> */}
            {/*         {_("Configured (DHCP and Static IP)")} */}
            {/*       </Link> */}
            {/*       <small>{_("10.10.10.5, 192.168.168.100, and 2 more")}</small> */}
            {/*     </Flex> */}
            {/*   </DescriptionListDescription> */}
            {/* </DescriptionListGroup> */}
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Storage")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}>
                  <Link to={STORAGE.root} variant="link" isInline>
                    {_("The where and how")}
                  </Link>
                  <small>{_("Room for something else?")}</small>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
            {/* <DescriptionListGroup> */}
            {/*   <DescriptionListTerm>{_("Authentication")}</DescriptionListTerm> */}
            {/*   <DescriptionListDescription> */}
            {/*     <Link to={USER.root} variant="link" isInline> */}
            {/*       {_("Not defined")} */}
            {/*     </Link> */}
            {/*   </DescriptionListDescription> */}
            {/* </DescriptionListGroup> */}
            <DescriptionListGroup>
              <DescriptionListTerm>{_("Authentication")}</DescriptionListTerm>
              <DescriptionListDescription>
                <Flex direction={{ default: "column" }} gap={{ default: "gapSm" }}>
                  <Link to={USER.root} variant="link" isInline>
                    {_("Configured")}
                  </Link>
                  <small>{_("With different password for root user")}</small>
                </Flex>
              </DescriptionListDescription>
            </DescriptionListGroup>
            {/* <DescriptionListGroup> */}
            {/*   <DescriptionListTerm>{_("Authentication")}</DescriptionListTerm> */}
            {/*   <DescriptionListDescription> */}
            {/*     <Link to={USER.root} variant="link" isInline> */}
            {/*       {_("Defined user and root access")} */}
            {/*     </Link> */}
            {/*   </DescriptionListDescription> */}
            {/* </DescriptionListGroup> */}
          </DescriptionList>
        </NestedContent>
      </Page.Section>
    </>
  );
}
