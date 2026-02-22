---
title: "AWS & Draw.io Architecture Diagram Generation Prompt V4 (experimental)"
sourcePath: "prompts/diagram/aws_drawio_architecture_diagram_generator_v4_dcolor_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/diagram/aws_drawio_architecture_diagram_generator_v4_dcolor_EN.md`
> Japanese: [JA](/diagram/aws_drawio_architecture_diagram_generator_v4_dcolor)

# AWS & Draw.io Architecture Diagram Generation Prompt V4 (experimental)

## Purpose
Create AWS architecture diagrams in Draw.io XML format to generate visually optimized diagrams
Please provide only the XML code

## Basic Layout Instructions
- **Utilize AWS Standard Groups**:
  - Always use standard groups such as AWS Cloud, Region, VPC, Availability Zone
  - Use appropriate groups like Public/Private Subnet, Security group, EC2 instance contents
  - Correctly represent nested group structure (AWS Cloud > Region > VPC > Availability Zone > Subnet)
- **Background Transparency**:
  - Set all group elements to transparent background with `fillColor=none`
  - Subnets should also be transparent by default, use light colors only when necessary
- **Shape Placement**:
  - Provide sufficient space between shapes to avoid interference
  - Avoid making diagrams overly complex
  - Place related shapes in close proximity to reduce arrow burden
  - Arrange shapes so that relationships between service icons are visually clear
  - Design public subnets vertically with room for vertical component placement
- **Text Placement**:
  - Place text below shapes
  - Use settings: verticalLabelPosition=bottom, verticalAlign=top

## Color and Style Specifications

### Color Map

- Create a dark theme using the following color map:
```
<palette>
<color name='Full-moon-1' rgb='010D00' r='0' g='12' b='0' />
<color name='Full-moon-2' rgb='D9CAB0' r='216' g='202' b='175' />
<color name='Full-moon-3' rgb='A69177' r='165' g='144' b='119' />
<color name='Full-moon-4' rgb='F2E2CE' r='242' g='225' b='205' />
<color name='Full-moon-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

### Icon styles:
  - Use modern, flat icons `sketch=0` `outlineConnect=0`
  - Use AWS4 resource icons `shape=mxgraph.aws4.resourceIcon`

## Arrow/Connector Optimization
- **Arrow Styles**:
  - Set arrow width to thin `strokeWidth=1`
  - Represent arrows as single continuous lines without breaks
  - Use `edgeStyle=orthogonalEdgeStyle` for right-angle corners only
  - Use rounded connection lines `rounded=1; orthogonalLoop=1`
- **Path Design**:
  - Draw arrows in purely horizontal/vertical directions, no diagonal lines
  - Route arrows to avoid interference with shapes
  - Organize arrow paths using right-angle turns
  - Adjust connector points as needed to create detour routes
- **Visual Clarity**:
  - Enable connector "jump style" to clearly show arrow crossings
  - Make arrow direction and flow immediately apparent

## XML Structure Optimization
- **Organized Code**:
  - Clearly separate sections with comments (e.g., `&lt;!-- AWS Cloud --&gt;`)
  - Assign unique IDs to each component (cloud, region, vpc, subnet-1, etc.)
  - Indent appropriately to clarify parent-child relationships

## Additional Elements
- **Title and Description**:
  - Add title and brief description at top of diagram
  - Set title with larger font size and bold formatting
- **Architecture Notes**:
  - Add framed notes section at bottom of diagram
  - List important design points in bullet format

---

## Code Examples

### AWS Cloud Element Example
```xml
<mxCell id="cloud" value="AWS Cloud" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1">
  <mxGeometry x="40" y="90" width="780" height="650" as="geometry" />
</mxCell>
```

### Region Element Example
```xml
<mxCell id="tokyo-region" value="ap-northeast-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="cloud">
  <mxGeometry x="20" y="40" width="420" height="590" as="geometry" />
</mxCell>
```

### VPC Element Example
```xml
<mxCell id="vpc" value="VPC" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" vertex="1" parent="tokyo-region">
  <mxGeometry x="10" y="130" width="380" height="440" as="geometry" />
</mxCell>
```

### Service Component Example
```xml
<!-- EC2 Instance -->
<mxCell id="ec2" value="EC2 Instance" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.instance2;" vertex="1" parent="ec2-contents">
  <mxGeometry x="40" y="40" width="28" height="28" as="geometry" />
</mxCell>

<!-- ECS Cluster -->
<mxCell id="ecs" value="ECS Cluster" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs;" vertex="1" parent="ec2-contents">
  <mxGeometry x="150" y="40" width="28" height="28" as="geometry" />
</mxCell>
```

### Connection Line Example
```xml
<mxCell id="cloudfront-to-alb" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="cloudfront" target="alb">
  <mxGeometry relative="1" as="geometry">
    <Array as="points">
      <mxPoint x="614" y="300" />
      <mxPoint x="260" y="300" />
    </Array>
  </mxGeometry>
</mxCell>
```

### Complete Architecture Diagram Example
By combining the above components, you can create a complete architecture diagram like the following:

- Outer frame representing entire AWS Cloud
- Tokyo Region (ap-northeast-1) and Virginia Region (us-east-1)
- Hierarchical structure of VPC, Availability Zone, Public Subnet
- EC2 instances and ECS clusters
- CloudFront and WAF configuration
- Appropriate connection relationships between all components
- Complete document including title, description, and architecture notes



## Output Example

```xml
<mxfile host="65bd71144e">
    <diagram id="LB83Jjl-gxU9Gu3MYcfJ" name="AWS Architecture">
        <mxGraphModel dx="930" dy="672" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
            <root>
                <mxCell id="0"/>
                <mxCell id="1" parent="0"/>
                <mxCell id="571" value="AWS Architecture: EE-LLM-Tester" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1" vertex="1" parent="1">
                    <mxGeometry x="40" y="10" width="350" height="30" as="geometry"/>
                </mxCell>
                <mxCell id="572" value="Terraform-managed infrastructure for Streamlit-based LLM testing application" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;" vertex="1" parent="1">
                    <mxGeometry x="40" y="40" width="350" height="20" as="geometry"/>
                </mxCell>
                <mxCell id="573" value="Users" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.users;" vertex="1" parent="1">
                    <mxGeometry x="380" y="10" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="574" value="AWS Cloud" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1">
                    <mxGeometry x="40" y="90" width="780" height="650" as="geometry"/>
                </mxCell>
                <mxCell id="575" value="ap-northeast-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="574">
                    <mxGeometry x="20" y="40" width="420" height="590" as="geometry"/>
                </mxCell>
                <mxCell id="576" value="VPC" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" vertex="1" parent="575">
                    <mxGeometry x="10" y="130" width="380" height="440" as="geometry"/>
                </mxCell>
                <mxCell id="577" value="Availability Zone" style="fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;whiteSpace=wrap;html=1;" vertex="1" parent="576">
                    <mxGeometry x="20" y="40" width="340" height="380" as="geometry"/>
                </mxCell>
                <mxCell id="578" value="Public subnet" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#7AA116;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="577">
                    <mxGeometry x="20" y="40" width="300" height="320" as="geometry"/>
                </mxCell>
                <mxCell id="579" value="Security group" style="fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;whiteSpace=wrap;html=1;" vertex="1" parent="578">
                    <mxGeometry x="20" y="40" width="260" height="100" as="geometry"/>
                </mxCell>
                <mxCell id="580" value="Application Load Balancer" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4D27AA;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application_load_balancer;" vertex="1" parent="579">
                    <mxGeometry x="106" y="22" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="581" value="Auto Scaling group" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.groupCenter;grIcon=mxgraph.aws4.group_auto_scaling_group;grStroke=1;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=center;fontColor=#D86613;dashed=1;spacingTop=25;" vertex="1" parent="578">
                    <mxGeometry x="20" y="170" width="260" height="140" as="geometry"/>
                </mxCell>
                <mxCell id="582" value="EC2 instance contents" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_ec2_instance_contents;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;" vertex="1" parent="581">
                    <mxGeometry x="20" y="40" width="220" height="90" as="geometry"/>
                </mxCell>
                <mxCell id="583" value="EC2 Instance" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.instance2;" vertex="1" parent="582">
                    <mxGeometry x="40" y="40" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="584" value="ECS Cluster" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs;" vertex="1" parent="582">
                    <mxGeometry x="150" y="40" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="585" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="582" source="583" target="584">
                    <mxGeometry relative="1" as="geometry"/>
                </mxCell>
                <mxCell id="586" value="Elastic IP" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_ip_address;" vertex="1" parent="578">
                    <mxGeometry x="40" y="50" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="589" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="578" source="586" target="583">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="54" y="-40"/>
                            <mxPoint x="94" y="-40"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="587" value="IAM Roles" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BF0816;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.role;" vertex="1" parent="575">
                    <mxGeometry x="300" y="50" width="40" height="40" as="geometry"/>
                </mxCell>
                <mxCell id="588" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="575" source="587" target="582">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="320" y="100"/>
                            <mxPoint x="380" y="100"/>
                            <mxPoint x="380" y="265"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="590" value="us-east-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="574">
                    <mxGeometry x="470" y="40" width="290" height="210" as="geometry"/>
                </mxCell>
                <mxCell id="591" value="CloudFront" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudfront;" vertex="1" parent="590">
                    <mxGeometry x="80" y="100" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="592" value="WAF&#xa;(IP Whitelist)" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.waf;" vertex="1" parent="590">
                    <mxGeometry x="200" y="100" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="593" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="573" target="591">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="404" y="100"/>
                            <mxPoint x="614" y="100"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="594" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="591" target="592">
                    <mxGeometry relative="1" as="geometry"/>
                </mxCell>
                <mxCell id="595" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="591" target="580">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="614" y="300"/>
                            <mxPoint x="260" y="300"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="596" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#666666;" vertex="1" parent="1">
                    <mxGeometry x="40" y="760" width="780" height="110" as="geometry"/>
                </mxCell>
                <mxCell id="597" value="Architecture Notes:" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1" vertex="1" parent="1">
                    <mxGeometry x="50" y="770" width="140" height="20" as="geometry"/>
                </mxCell>
                <mxCell id="598" value="- CloudFront distribution with WAF for IP whitelisting serves as front-end&#xa;- ECS cluster runs on a single EC2 instance with ALB handling traffic&#xa;- Auto-scaling scheduled to run on weekdays from 8AM to 10PM JST&#xa;- Specialized CloudFront cache behaviors for Streamlit WebSocket connections&#xa;- IAM roles provide necessary permissions including Bedrock full access" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
                    <mxGeometry x="50" y="795" width="740" height="70" as="geometry"/>
                </mxCell>
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>

```

## Architecture to Create
