import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBenefits extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'connector';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksCategories extends Schema.Component {
  collectionName: 'components_blocks_categories';
  info: {
    displayName: 'Categories';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    categories: Attribute.Relation<
      'blocks.categories',
      'oneToMany',
      'api::category.category'
    >;
    title: Attribute.String;
    allCategoriesLinkTitle: Attribute.String;
    allCategoriesLink: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    buttons: Attribute.Component<'links.button-link', true>;
    benefits: Attribute.Component<'blocks.benefits', true>;
  };
}

export interface BlocksProductsList extends Schema.Component {
  collectionName: 'components_blocks_products_lists';
  info: {
    displayName: 'Products List';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlocksSubmitForm extends Schema.Component {
  collectionName: 'components_blocks_submit_forms';
  info: {
    displayName: 'SubmitForm';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    inputs: Attribute.Component<'shared.input', true>;
    checkboxes: Attribute.Component<'shared.checkbox', true>;
    submitButton: Attribute.Component<'links.button'>;
  };
}

export interface BlocksSubscribeForm extends Schema.Component {
  collectionName: 'components_blocks_subscribe_forms';
  info: {
    displayName: 'SubscribeForm';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    inputSubscribe: Attribute.Component<'shared.input'>;
    subscribeButton: Attribute.Component<'links.button'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    footerLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    buttons: Attribute.Component<'links.button-link', true>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String;
    variant: Attribute.Enumeration<['primary', 'secondary', 'link']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
    href: Attribute.String;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    children: Attribute.Component<'links.sub-link', true>;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface LinksSubLink extends Schema.Component {
  collectionName: 'components_links_sub_links';
  info: {
    displayName: 'SubLink';
    icon: 'arrowUp';
  };
  attributes: {
    label: Attribute.String;
    subLabel: Attribute.String;
    href: Attribute.String;
  };
}

export interface MetaMetaData extends Schema.Component {
  collectionName: 'components_meta_meta_data';
  info: {
    displayName: 'MetaData';
    icon: 'alien';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
  };
}

export interface SharedCheckbox extends Schema.Component {
  collectionName: 'components_shared_checkboxes';
  info: {
    displayName: 'Checkbox';
    icon: 'crop';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String;
    hrefText: Attribute.String;
  };
}

export interface SharedColorPicker extends Schema.Component {
  collectionName: 'components_shared_color_pickers';
  info: {
    displayName: 'ColorPicker';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    img: Attribute.Media;
    colorData: Attribute.String;
  };
}

export interface SharedEnginePicker extends Schema.Component {
  collectionName: 'components_shared_engine_pickers';
  info: {
    displayName: 'EnginePicker';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    description: Attribute.String;
    about: Attribute.Text;
    price: Attribute.BigInteger;
    priceCurrency: Attribute.String;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedInput extends Schema.Component {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
    icon: 'user';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.Enumeration<['text', 'email', 'number', 'tel']>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedTag extends Schema.Component {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
    icon: 'chartBubble';
  };
  attributes: {
    name: Attribute.String;
    color: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.benefits': BlocksBenefits;
      'blocks.categories': BlocksCategories;
      'blocks.hero': BlocksHero;
      'blocks.products-list': BlocksProductsList;
      'blocks.submit-form': BlocksSubmitForm;
      'blocks.subscribe-form': BlocksSubscribeForm;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'links.sub-link': LinksSubLink;
      'meta.meta-data': MetaMetaData;
      'shared.checkbox': SharedCheckbox;
      'shared.color-picker': SharedColorPicker;
      'shared.engine-picker': SharedEnginePicker;
      'shared.heading': SharedHeading;
      'shared.input': SharedInput;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.tag': SharedTag;
    }
  }
}
