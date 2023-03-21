// 整个包的入口
// 定义 install 方法，接收 Vue作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器
import Button from './Button'
import Input from './Input'
import Dialog from './Dialog'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import Switch from './Switch'
import Form from './Form'
import FormItem from './FormItem'
import InputNumber from './InputNumber'
import './font/src/ant-design/iconfont.css'
import './font/src/taobao/iconfont.css'

// 存储组件列表
const components = [
  Button,
  Input,
  Dialog,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Form,
  FormItem,
  InputNumber
]

const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}