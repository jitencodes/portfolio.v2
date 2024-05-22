import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailProps {
    authorName?: string;
    authorEmail?: string;
    message?: string;
  }
  
  const Email = ({
    authorName,
    authorEmail,
    message,
  }: EmailProps) => {
    const pmessage = `${authorName} try to contact you.`;
  
    return (
      <Html>
        <Head />
        <Preview>{pmessage}</Preview>
  
        <Body style={main}>
          <Container style={container}>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>Here&apos;s what {authorName} wrote</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                    {`You can reply to ${authorEmail} by using reply button.`}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  Email.PreviewProps = {
    authorName: "jitencodes",
    authorEmail: `jitendra.s1487@gmail.com`,
    message: `“I love your portfolio!”`,
  } as EmailProps;
  
  export default Email;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
  };
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };
  
  const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
  };
  