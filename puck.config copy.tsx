import { Config } from "@puckeditor/core";
import Navbar from "./components/navbar/navigation";
import Hero from "./components/Hero/page";
import { HeroProps, DEFAULT_HERO_PROPS } from "@/constants/hero-defaults";
import { ServicesProps, DEFAULT_SERVICES_PROPS } from "@/constants/services-defaults";
import Services from "@/components/Services/page";
import { WhoWeHelpProps, DEFAULT_WHO_WE_HELP_PROPS, ClientItem } from "@/constants/who-we-help-defaults";
import WhoWeHelp from "@/components/WhoWeHelp/page";

import { OurDifferenceProps, DEFAULT_DIFFERENCE_PROPS, DifferenceCard } from "@/constants/difference-defaults";
import OurDifference from "@/components/Differences/page";

import { PartnerProps, DEFAULT_PARTNER_PROPS } from "@/constants/partner-defaults";
import Partner from "@/components/Partner/page"; 

import { FooterProps, DEFAULT_FOOTER_PROPS, FooterColumnItem } from "@/constants/footer-defaults";
import Footer from "@/components/footer/footer"

import { AboutProps, DEFAULT_ABOUT_PROPS } from "@/constants/about-defaults";
import About from "@/components/About/page";

type NavItem = {
  label: string;
  href: string;
};


type Props = {
  Heading: { title: string };
  Navbar: {
    bookingUrl: string;
    links: NavItem[];
  };
  Hero: HeroProps;
  About: AboutProps;
  Services: ServicesProps;
  WhoWeHelp: WhoWeHelpProps;
  OurDifference: OurDifferenceProps;
  Partner: PartnerProps;
  Footer: FooterProps;
};

export const config: Config<Props> = {
  components: {
    Heading: {
      fields: {
        title: { type: "text" },
      },
      render: ({ title }) => (
        <h1 className="your-fixed-tailwind-classes">{title}</h1>
      ),
    },
    Navbar: {
      fields: {
        bookingUrl: { type: "text" },
        links: {
          type: "array",
          getItemSummary: (item: NavItem) => item.label || "Link",
          arrayFields: {
            label: { type: "text" },
            href: { type: "text" },
          },
        },
      },
      defaultProps: {
        bookingUrl: "https://www.cognitoforms.com...",
        links: [
          { label: "ABOUT US", href: "about" },
          { label: "OUR SERVICES", href: "services" },
          { label: "WHO WE HELP", href: "who-we-help" },
          { label: "OUR DIFFERENCE", href: "difference" },
        ],
      },
      render: (props) => <Navbar {...props} />,
    },

    Hero: {
      fields: {
        title: { type: "textarea" }, // textarea allows the user to add \n for <br /> logic
        description: { type: "textarea" },
        buttonText: { type: "text" },
        buttonHref: { type: "text" },
      },
      defaultProps: DEFAULT_HERO_PROPS,
      render: (props) => <Hero {...props} />,
    },
    About: {
      fields: {
        heading: { type: "text" },
        subheading: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        bottomStatement: { type: "text" },
      },
      defaultProps: DEFAULT_ABOUT_PROPS,
      render: (props) => <About {...props} />,
    },

    Services: {
      fields: {
        heading: { type: "text" },
        services: {
          type: "array",
          getItemSummary: (item) => item.title || "Service",
          arrayFields: {
            title: { type: "text" },
            description: { type: "textarea" },
          },
        },
      },
      defaultProps: DEFAULT_SERVICES_PROPS,
      render: (props) => <Services {...props} />,
    },
    WhoWeHelp: {
      fields: {
        heading: { type: "text" },
        description: { type: "textarea" },
        clients: {
          type: "array",
          getItemSummary: (item: ClientItem) => item.name || "Client",
          arrayFields: {
            name: { type: "text" } // Strictly matches the ClientItem type
          }
        },
      },
      defaultProps: DEFAULT_WHO_WE_HELP_PROPS,
      render: (props) => <WhoWeHelp {...props} />,
    },
    OurDifference: {
      fields: {
        heading: { type: "text" },
        cards: {
          type: "array",
          getItemSummary: (item: DifferenceCard) => item.title || "Card",
          arrayFields: {
            title: { type: "text" },
            description: { type: "textarea" },
          },
        },
      },
      defaultProps: DEFAULT_DIFFERENCE_PROPS,
      render: (props) => <OurDifference {...props} />,
    },
    Partner: {
      fields: {
        heading: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        buttonHref: { type: "text" },
      },
      defaultProps: DEFAULT_PARTNER_PROPS,
      render: (props) => <Partner {...props} />,
    },
    Footer: {
      fields: {
        email: { type: "text" },
        phone: { type: "text" },
        columns: {
          type: "array",
          getItemSummary: (item: FooterColumnItem) => item.title || "Column",
          arrayFields: {
            title: { type: "text" },
            links: {
              type: "array",
              arrayFields: {
                label: { type: "text" },
                href: { type: "text" },
              },
            },
          },
        },
        socials: {
          type: "array",
          getItemSummary: (item) => item.platform || "Social",
          arrayFields: {
            platform: { 
              type: "select", 
              options: [
                { label: "Facebook", value: "Facebook" },
                { label: "Instagram", value: "Instagram" },
                { label: "Linkedin", value: "Linkedin" },
              ] 
            },
            href: { type: "text" },
          },
        },
      },
      defaultProps: DEFAULT_FOOTER_PROPS,
      render: (props) => <Footer {...props} />,
    },
  },
};
